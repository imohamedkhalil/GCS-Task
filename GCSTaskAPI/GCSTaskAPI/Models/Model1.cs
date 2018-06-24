namespace GCSTaskAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Instructor> Instructors { get; set; }
        public virtual DbSet<Instructor_Course> Instructor_Course { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Student_Course> Student_Course { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .HasMany(e => e.Instructor_Course)
                .WithOptional(e => e.Course)
                .HasForeignKey(e => e.course_id);

            modelBuilder.Entity<Course>()
                .HasMany(e => e.Student_Course)
                .WithOptional(e => e.Course)
                .HasForeignKey(e => e.course_id);

            modelBuilder.Entity<Instructor>()
                .HasMany(e => e.Instructor_Course)
                .WithOptional(e => e.Instructor)
                .HasForeignKey(e => e.instructor_id);

            modelBuilder.Entity<Student>()
                .HasMany(e => e.Student_Course)
                .WithOptional(e => e.Student)
                .HasForeignKey(e => e.student_id);
        }
    }
}
