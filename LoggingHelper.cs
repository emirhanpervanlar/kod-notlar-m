using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace servis_project.Helper
{
    public class LoggingHelper
    {
        public static void LogException(string routeData,string title,string message){
            // Log kayıtlarını projenin içerisindeki Logs dosyasına tarih bazlı olarak kayıt ediyoruz
            string fileName = string.Format("{0}_{1}.log","Exception",DateTime.Now.ToShortDateString());
            string logFilePath = string.Format(@"{0}/{1}",AppDomain.CurrentDomain.BaseDirectory+"/Logs",fileName);
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("-------------------------------------------------------------------------------------------");
            sb.AppendLine(DateTime.Now.ToString());
            sb.AppendLine(routeData);
            sb.AppendLine(title);
            sb.AppendLine(message);
            using (StreamWriter writer = new StreamWriter(logFilePath, true))
            {
                writer.Write(sb.ToString());
                writer.Flush();
            }
        }
    }
}