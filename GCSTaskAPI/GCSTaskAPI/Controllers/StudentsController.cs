using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using GCSTaskAPI.Managers;
using GCSTaskAPI.Models;
using GCSTaskAPI.POCOClasses;

namespace GCSTaskAPI.Controllers
{
    public class StudentsController : ApiController
    {
        public StudentManager studentManager = new StudentManager();
        private Model1 db = new Model1();

        // GET: api/Students
        public List<POCOStudent> GetStudents()
        {
            return db.Students.Select(a => new POCOStudent { Id = a.id, Name = a.name, Phone = a.phone, Mail = a.mail, Birthdate = a.birthdate}).ToList();
        }

        // GET: api/Students/5
        [ResponseType(typeof(Student))]
        public POCOStudent GetStudent(int id)
        {
            return db.Students.Select(a => new POCOStudent { Id = a.id, Name = a.name, Phone = a.phone, Mail = a.mail, Birthdate = a.birthdate, CourseName = a.Student_Course.Where(b => b.student_id==a.id).Select(b => b.Course.name).ToList()}).FirstOrDefault(a => a.Id == id);

        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudent(int id, Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != student.id)
            {
                return BadRequest();
            }

            db.Entry(student).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Students
        [ResponseType(typeof(Student))]
        public IHttpActionResult PostStudent(POCOStudent pocoStudent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Student student = new Student()
            {
                name = pocoStudent.Name,
                phone = pocoStudent.Phone,
                mail = pocoStudent.Mail,
                birthdate = pocoStudent.Birthdate,
            };

            var st = db.Students.Add(student);
            db.SaveChanges();
            studentManager.Add(st, pocoStudent);

            return CreatedAtRoute("DefaultApi", new { id = st.id }, st);
        }

        // DELETE: api/Students/5
        [ResponseType(typeof(Student))]
        public IHttpActionResult DeleteStudent(int id)
        {
            studentManager.Remove(id);
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            db.Students.Remove(student);
            db.SaveChanges();

            return Ok(student);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentExists(int id)
        {
            return db.Students.Count(e => e.id == id) > 0;
        }
    }
}