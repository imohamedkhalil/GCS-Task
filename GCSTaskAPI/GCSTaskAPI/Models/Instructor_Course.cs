namespace GCSTaskAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Instructor_Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public int? instructor_id { get; set; }

        public int? course_id { get; set; }

        public virtual Course Course { get; set; }

        public virtual Instructor Instructor { get; set; }
    }
}
