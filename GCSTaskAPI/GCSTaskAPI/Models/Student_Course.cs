namespace GCSTaskAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Student_Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public int? student_id { get; set; }

        public int? course_id { get; set; }

        public virtual Course Course { get; set; }

        public virtual Student Student { get; set; }
    }
}
