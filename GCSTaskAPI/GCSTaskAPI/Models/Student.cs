namespace GCSTaskAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Student")]
    public partial class Student
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Student()
        {
            Student_Course = new HashSet<Student_Course>();
        }

        public int id { get; set; }

        [StringLength(50)]
        public string name { get; set; }

        [StringLength(50)]
        public string phone { get; set; }

        [StringLength(50)]
        public string mail { get; set; }

        [Column(TypeName = "date")]
        public DateTime? birthdate { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Student_Course> Student_Course { get; set; }
    }
}
