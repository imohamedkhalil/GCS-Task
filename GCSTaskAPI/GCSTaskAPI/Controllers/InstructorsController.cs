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
    public class InstructorsController : ApiController
    {
        private Model1 db = new Model1();
        InstructorManager instructorManager = new InstructorManager();
        // GET: api/Instructors
        public List<POCOInstructor> GetInstructors()
        {
            return db.Instructors.Select(a=> new POCOInstructor {Id = a.id, Name = a.name, Phone = a.phone, Mail = a.mail, Department = a.department}).ToList();
        }

        // GET: api/Instructors/5
        [ResponseType(typeof(Instructor))]
        public POCOInstructor GetInstructor(int id)
        {
            return db.Instructors.Select(a=> new POCOInstructor {Id = a.id, Name = a.name, Phone = a.phone, Mail = a.mail, Department = a.department, CourseName = a.Instructor_Course.Where(b => b.instructor_id == a.id).Select(b => b.Course.name).ToList()}).FirstOrDefault(a => a.Id == id);

        }

        // PUT: api/Instructors/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInstructor(int id, Instructor instructor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != instructor.id)
            {
                return BadRequest();
            }

            db.Entry(instructor).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InstructorExists(id))
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

        // POST: api/Instructors
        [ResponseType(typeof(Instructor))]
        public IHttpActionResult PostInstructor(POCOInstructor pocoInstructor)
        {
           

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Instructor instructor = new Instructor()
            {
                name = pocoInstructor.Name,
                phone = pocoInstructor.Phone,
                department = pocoInstructor.Department,
                mail = pocoInstructor.Mail,
            };
            var inst = db.Instructors.Add(instructor);
            db.SaveChanges();
            instructorManager.Add(inst, pocoInstructor);

            return CreatedAtRoute("DefaultApi", new { id = inst.id }, inst);
        }

        // DELETE: api/Instructors/5
        [ResponseType(typeof(Instructor))]
        public IHttpActionResult DeleteInstructor(int id)
        {
            instructorManager.Remove(id);
            Instructor instructor = db.Instructors.Find(id);
            if (instructor == null)
            {
                return NotFound();
            }

            db.Instructors.Remove(instructor);
            db.SaveChanges();

            return Ok(instructor);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InstructorExists(int id)
        {
            return db.Instructors.Count(e => e.id == id) > 0;
        }
    }
}