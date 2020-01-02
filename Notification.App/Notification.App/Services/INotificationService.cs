using Notification.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notification.App.Services
{
    public interface INotificationService
    {
        Task RegisterForPush(string username, string token);

        Task SendNotification(NotificationItem notification);
    }
}
