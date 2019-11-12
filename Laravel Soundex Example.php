<?php

namespace App\Http\Controllers;

use App\faq;
use Illuminate\Http\Request;

class PageController extends Controller
{
    //FAQ Search Get Single
    public function getSingleHomeFAQ(Request $request)
    {
        $faqID = trim(htmlspecialchars($request->faq_id));
        $getData = faq::select("id","title","description")->where("id",$faqID)->first();
        return response()->json(["faq",$getData]);
    }

    //FAQ Search
    public function searchHomeFAQ(Request $request)
    {
        // CLEAR REQUEST
        $faqKey= trim(htmlspecialchars($request->faqKey));
        return response()->json(['searchData'=>faq::select("id","title","description")->whereRaw("SOUNDEX(title) LIKE CONCAT(TRIM(TRAILING '0' FROM SOUNDEX('$faqKey')),'%') OR SOUNDEX(description) LIKE CONCAT(TRIM(TRAILING '0' FROM SOUNDEX('$faqKey')),'%')")->where("status",1)->get()]);
    }

}
