﻿// <auto-generated />
using API.DataModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("API.DataModel.Actors", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("DateOfBirth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProfilePicture")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("genresId")
                        .HasColumnType("int")
                        .HasColumnName("genresId");

                    b.HasKey("Id");

                    b.HasIndex("genresId");

                    b.ToTable("actors");
                });

            modelBuilder.Entity("API.DataModel.genres", b =>
                {
                    b.Property<int>("genresId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("genresId"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("genresId");

                    b.ToTable("genres");

                    b.HasData(
                        new
                        {
                            genresId = 1,
                            Name = "drama"
                        });
                });

            modelBuilder.Entity("API.DataModel.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("actorId")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("relaseDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("actorId");

                    b.ToTable("movies");
                });

            modelBuilder.Entity("API.DataModel.MovieTeatherDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("movieId")
                        .HasColumnType("int");

                    b.Property<int>("movieTheatherId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("movieTheatherId");

                    b.ToTable("movieTeatherDetails");
                });

            modelBuilder.Entity("API.DataModel.MovieTheather", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("moviesTheather");
                });

            modelBuilder.Entity("API.DataModel.Actors", b =>
                {
                    b.HasOne("API.DataModel.genres", "Genres")
                        .WithMany()
                        .HasForeignKey("genresId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Genres");
                });

            modelBuilder.Entity("API.DataModel.Movie", b =>
                {
                    b.HasOne("API.DataModel.Actors", "actors")
                        .WithMany()
                        .HasForeignKey("actorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("actors");
                });

            modelBuilder.Entity("API.DataModel.MovieTeatherDetails", b =>
                {
                    b.HasOne("API.DataModel.MovieTheather", "movieTheather")
                        .WithMany()
                        .HasForeignKey("movieTheatherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("movieTheather");
                });
#pragma warning restore 612, 618
        }
    }
}
