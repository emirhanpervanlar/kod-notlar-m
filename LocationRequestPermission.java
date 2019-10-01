    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Konum izni alıyoruz
        checkLocationPermission();
    }

    public boolean checkLocationPermission() {
        // Konum izni işlemleri için kullanıyoruz
        if (ContextCompat.checkSelfPermission(this,Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.ACCESS_FINE_LOCATION)) {
                new AlertDialog.Builder(this)
                .setTitle("Konum İzni Verilmemiş")
                .setMessage("Uygulamayı kullanabilmek için konum izni verilmesi gerekmektedir.")
                .setPositiveButton("İlerle", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialogInterface, int i) {
                        // İlerleme işleminde yapılacak işlem tanımlanıyor
                        ActivityCompat.requestPermissions(MainActivity.this,new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, MY_PERMISSIONS_REQUEST_LOCATION); }
                        }).setOnCancelListener(new DialogInterface.OnCancelListener() {
                            // Pencere iptal edilirse program kapatılıyor
                            @Override
                            public void onCancel(DialogInterface dialog) {
                                finish();
                                moveTaskToBack(true);
                            }
                        })
                        .create()
                        .show();
                    } else {
                        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.ACCESS_FINE_LOCATION},MY_PERMISSIONS_REQUEST_LOCATION);
                    }
                        return false;
                    } else {
                        return true;
                    }
        }

    @Override
    public void onRequestPermissionsResult(int requestCode,
        String permissions[], int[] grantResults) {
        // İzin verme penceresini ifade etmektedir
        switch (requestCode) {
            case MY_PERMISSIONS_REQUEST_LOCATION: {
                // If request is cancelled, the result arrays are empty.
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    if (ContextCompat.checkSelfPermission(this,Manifest.permission.ACCESS_FINE_LOCATION)  == PackageManager.PERMISSION_GRANTED) {
                        Log.d("ServiceTest","Onaylandı geldi");
                    }
                } else {
                Log.d("ServiceTest","Reddedildi geldi");
//                    System.exit(1);
                finish();
                moveTaskToBack(true);
                // permission denied, boo! Disable the
                // functionality that depends on this permission.
                }
            return;
            }
        }
    }