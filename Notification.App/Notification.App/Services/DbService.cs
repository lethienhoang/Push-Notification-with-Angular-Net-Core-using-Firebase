using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;
using Notification.App.Models;

namespace Notification.App.Services
{
    public class DbService : IDbService
    {
        private const string _dbName = "tempDb.db";
        private const string _userName = "user";
        public DbService()
        {
        }

        public IEnumerable<User> GetUsers()
        {
            IEnumerable<User> users = null;

            using(var db = new LiteDatabase(_dbName)) 
            {
                var usersCollection = db.GetCollection<User>(_userName);
                users = usersCollection.FindAll();
            }

            return users;
        }

        public void SaveUser(User user)
        {
            using(var db = new LiteDatabase(_dbName))
            {
                var users = db.GetCollection<User>(_userName);
                users.Insert(user);
            }
        }
    }
}
