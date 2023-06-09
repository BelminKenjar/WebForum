﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevForum.ViewModels.Topic
{
    public class TopicUpdateModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int SubTopicCount { get; set; }
        public byte[] Logo { get; set; }
    }
}
