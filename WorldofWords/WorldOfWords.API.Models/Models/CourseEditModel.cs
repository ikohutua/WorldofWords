﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorldOfWords.API.Models
{
    public class CourseEditModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int LanguageId { get; set; }
        public int OwnerId { get; set; }
        public List<CourseWordSuiteModel> WordSuites { get; set; }
    }
}
