using GCSTaskAPI.Models;
using GCSTaskAPI.POCOClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSTaskAPI.Managers
{
    public class CourseManager
    {
        Model1 db = new Model1();
        public void Add(Course c, POCOCourse pocoCourse)
        {
            if(pocoCourse.StudentsId != null)
            {
                foreach (int id in pocoCourse.StudentsId)
                {
                    Student_Course sc = new Student_Course()
                    {
                        student_id = id,
                        course_id = c.id
                    };

                    db.Student_Course.Add(sc);
                    db.SaveChanges();
                }
            }
           
            if(pocoCourse.InstructorsId != null)
            {
                foreach (int id in pocoCourse.InstructorsId)
                {
                    Instructor_Course ic = new Instructor_Course()
                    {
                        instructor_id = id,
                        course_id = c.id
                    };

                    db.Instructor_Course.Add(ic);
                    db.SaveChanges();
                }
            }
            
        }

        public void Remove(int id)
        {
            List<Instructor_Course> ics = db.Instructor_Course.Where(a => a.course_id == id).Select(a => a).ToList();
            if (ics != null)
            {
                foreach (var item in ics)
                {
                    db.Instructor_Course.Remove(item);
                    db.SaveChanges();
                }
            }
            List<Student_Course> scs = db.Student_Course.Where(a => a.course_id == id).Select(a => a).ToList();
            if (scs != null)
            {
                foreach (var item in scs)
                {
                    db.Student_Course.Remove(item);
                    db.SaveChanges();
                }
            }


        }
    }
}
    
   