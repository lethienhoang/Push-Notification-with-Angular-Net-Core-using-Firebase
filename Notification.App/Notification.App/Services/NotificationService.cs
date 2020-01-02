using CorePush.Google;
using Microsoft.Extensions.Options;
using Notification.App.Infrastructure.AppSettings;
using Notification.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notification.App.Services
{
    public class NotificationService : INotificationService
    {
        private readonly IDbService _dbService;
        private readonly CommonSettings _options;

        public NotificationService(IDbService dbService, IOptions<CommonSettings> options)
        {
            _dbService = dbService;
            _options = options.Value;
        }

        public async Task RegisterForPush(string username, string token)
        {
            _dbService.SaveUser(new User
            {
                UserName = username,
                Token = token
            });

            if (token != null)
            {
                await SendNotification(new NotificationItem
                {
                    Title = "Notification Test",
                    Body = "Successfuly registered for push notifications"
                });
            }
        }

        public async Task SendNotification(NotificationItem notification)
        {
            var users = _dbService.GetUsers();

            foreach (var user in users)
            {
                using (var fcm = new FcmSender(_options.ServerKey, user.UserName))
                {
                    await fcm.SendAsync(user.Token,
                        new
                        {
                            notification = new
                            {
                                title = notification.Title,
                                body = notification.Body
                            }
                        });
                }
            }
        }
    }
}
