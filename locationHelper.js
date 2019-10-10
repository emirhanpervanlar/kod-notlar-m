// 2 Konum arasındaki mesafeyi hesaplıyoruz
function _getLocationDistance(lat1,lon1,lat2,lon2){
    let floatLat1 = parseFloat(lat1);
    let floatLon1 = parseFloat(lon1);
    let floatLat2 = parseFloat(lat2);
    let floatLon2 = parseFloat(lon2);
    if ((floatLat1 == floatLat2) && (floatLon1 == floatLon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * floatLat1/180;
        let radlat2 = Math.PI * floatLat2/180;
        let theta = floatLon1-floatLon2;
        let radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) { dist = 1; }
        dist = Math.acos(dist);
        dist = (dist * 180/Math.PI) * 111189.57696;
        return dist;
    }
};
