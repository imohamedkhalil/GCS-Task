using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSTaskAPI.POCOClasses
{
    public class POCOCourse
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string NoOfHours { get; set; }
        public string Name { get; set; }
        public List<int> InstructorsId { get; set; }
        public List<string> InstructorsName { get; set; }
        public List<int> StudentsId { get; set; }
        public List<string> StudentsName { get; set; }





    }
}