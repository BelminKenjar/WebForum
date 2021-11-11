﻿using DevForum.ViewModels.Profile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevForum.Services.Interfaces
{
    public interface IProfileService
    {
        IEnumerable<ProfileViewModel> Get();
        ProfileViewModel GetById(int id);
        Task<ProfileViewModel> Insert(ProfileInsertModel model);
        Task<ProfileViewModel> Update(int id, ProfileUpdateModel model);
    }
}
