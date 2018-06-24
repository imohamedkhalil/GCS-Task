using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSTaskAPI.POCOClasses
{
    public class POCOStudent
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
        public DateTime? Birthdate { get; set; }
        public List<int> CourseId { get; set; }
        public List<string> CourseName { get; set; }

    }
}