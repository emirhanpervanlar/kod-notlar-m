using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;

namespace servis_project.Helper
{
    public class NotificationHelper
    {
        public static string getReplaceNotification(string notificationText,string expeditionName = "", string expeditionTime = "", string personName = "", string debtTime = "", string debtPrice = "")
        {
            // Gelen kelimeyi verilerin boş veya dolu gelme durumlarına göre dolduruyoruz
            string tmpText = notificationText;
            if (expeditionName != "")
                tmpText = tmpText.Replace("[GUZERGAHAD]",expeditionName);
            
            if (expeditionTime != "")
                tmpText = tmpText.Replace("[GUZERGAHSURE]", expeditionTime);
            
            if (personName != "")
                tmpText = tmpText.Replace("[OGRENCIAD]", personName);
            
            if (debtTime != "")
                tmpText = tmpText.Replace("[BORCDONEM]", debtTime);

            if (debtPrice != "")
                tmpText = tmpText.Replace("[BORCTUTAR]", debtPrice);

            return tmpText;
        }
    }
}