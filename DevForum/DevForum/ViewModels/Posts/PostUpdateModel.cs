﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevForum.ViewModels.Posts
{
    public class PostUpdateModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime EditedAt { get; set; } 
    }
}
