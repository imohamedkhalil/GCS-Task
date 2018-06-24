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
    public class CoursesController : ApiController
    {
        private Model1 db = new Model1();
        public CourseManager courseManager = new CourseManager();
        // GET: api/Courses
        public List<POCOCourse> GetCourses()
        {
            return db.Courses.Select(a =>new POCOCourse {Name =a.name ,Code=a.code ,NoOfHours =a.noOfHours ,Id=a.id }).ToList();
        }

        // GET: api/Courses/5
        [ResponseType(typeof(Course))]
        public POCOCourse GetCourse(int id)
        {
            POCOCourse course= db.Courses.Select(a => new POCOCourse { Name = a.name, Code = a.code, NoOfHours = a.noOfHours, Id = a.id, InstructorsName = a.Instructor_Course.Where(b => b.course_id == a.id).Select(b=>b.Instructor.name).ToList(), StudentsName = a.Student_Course.Where(b=>b.course_id == a.id).Select(b => b.Student.name).ToList()}).FirstOrDefault(a => a.Id == id);
            return course;
        }

        // PUT: api/Courses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCourse(int id, Course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != course.id)
            {
                return BadRequest();
            }

            db.Entry(course).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
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

        // POST: api/Courses
        [ResponseType(typeof(Course))]
        public IHttpActionResult PostCourse(POCOCourse pocoCourse)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Course course = new Course()
            {
                name = pocoCourse.Name,
                code = pocoCourse.Code,
                noOfHours = pocoCourse.NoOfHours,
            };
            var c = db.Courses.Add(course);
            db.SaveChanges();
            courseManager.Add(c, pocoCourse);
            return CreatedAtRoute("DefaultApi", new { id = c.id }, c);
        }

        // DELETE: api/Courses/5
        [ResponseType(typeof(Course))]
        public IHttpActionResult DeleteCourse(int id)
        {
            courseManager.Remove(id);
            Course course = db.Courses.Find(id);
            if (course == null)
            {
                return NotFound();
            }

            db.Courses.Remove(course);
            db.SaveChanges();

            return Ok(course);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CourseExists(int id)
        {
            return db.Courses.Count(e => e.id == id) > 0;
        }
    }
}