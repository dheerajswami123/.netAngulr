using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMvcDemo.Models.EF;

namespace AngularMvcDemo.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        private DemoDbContext context = null;

        public UserController()
        {
            context = new DemoDbContext();
        }

        public JsonResult Index()
        {
            var users = context.Users.ToList();
            return Json(users, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var user = context.Users.Find(id);
            return Json(user, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Update(User user)
        {
            context.Entry(user).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var user = context.Users.Find(id);
            context.Users.Remove(user);
            context.SaveChanges();
            return Json(null);
        }
    }
}