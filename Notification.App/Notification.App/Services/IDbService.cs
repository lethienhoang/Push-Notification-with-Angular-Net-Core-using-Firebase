using Notification.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notification.App.Services
{
    public interface IDbService
    {
        IEnumerable<User> GetUsers();

        void SaveUser(User user);
    }
}
