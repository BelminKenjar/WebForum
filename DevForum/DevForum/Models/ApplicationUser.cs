﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevForum.Models
{
    public class ApplicationUser : IdentityUser
    {
        public virtual Profile Profile { get; set; }
    }
}
