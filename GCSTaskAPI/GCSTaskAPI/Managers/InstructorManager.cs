using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GCSTaskAPI.Models;
using GCSTaskAPI.POCOClasses;

namespace GCSTaskAPI.Managers
{
    public class InstructorManager
    {
        Model1 db = new Model1();
        public void Add(Instructor inst, POCOInstructor pocoInstructor)
        {
            if(pocoInstructor.CourseId != null)
            {
                foreach (int id in pocoInstructor.CourseId)
                {
                    Instructor_Course ic = new Instructor_Course()
                    {
                        course_id = id,
                        instructor_id = inst.id

                    };

                    db.Instructor_Course.Add(ic);
                    db.SaveChanges();
                }
            }
        }

         public void Remove(int id)
        {
            List<Instructor_Course> courses = db.Instructor_Course.Where(a => a.instructor_id == id).ToList();
            if (courses != null)
            {
                foreach (var item in courses)
                {
                    db.Instructor_Course.Remove(item);
                    db.SaveChanges();
                }
            }
        }
    }
}