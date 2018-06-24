using GCSTaskAPI.Models;
using GCSTaskAPI.POCOClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSTaskAPI.Managers
{
    public class StudentManager
    {
        Model1 db = new Model1();
        public void Add(Student st, POCOStudent pocoStudent)
        {

            if(pocoStudent.CourseId != null)
            {
                foreach (int id in pocoStudent.CourseId)
                {
                    Student_Course sc = new Student_Course()
                    {
                        course_id = id,
                        student_id = st.id

                    };

                    db.Student_Course.Add(sc);
                    db.SaveChanges();
                }
            }
        }

        public void Remove(int id)
        {
            List<Student_Course> sc = db.Student_Course.Where(a => a.student_id == id).Select(a => a).ToList();
            if(sc != null)
            {
                foreach (var item in sc)
                {
                    db.Student_Course.Remove(item);
                    db.SaveChanges();
                }
            }
        }
    }
}
