$(document).ready(function() {                     //click
    var i = 2;
    $("#dk").click(function() {
        $("#myModal").modal();
    })
//------------------------------------------kiem tra ma: nhap 10 so, khong rong, khong nhap sai.
    function kiemTraMa() {
        var mauKT = /[0-9]{9}$/;//------10 so
        if (mauKT.test($("#txtMa").val()) == true) {
            alert("Ban nhap dung");
            return true;
        } else {
            alert("Ban nhap sai");
            return false;
        }
    }
    $("#txtMa").blur(kiemTraMa);

    function kiemTraEmail() {
        var Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (Email.test($("#txtemail").val()) == true) {
            alert("Ban nhap dung");
            return true;
        } else {
            alert("Ban nhap sai");
            return false;
        }
    }
    $("#txtemail").blur(kiemTraEmail);
//------------------------------------------kt ho ten
function kiemTraHT() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]*))*$/;
        if ($("#txtTen").val() == "") {
            $("#tbTen").html("*Bat buoc nhap!");
            $("tbTen").addClass("mauDo");
            return false;
        } else
        if (!kt.test($("#txtTen").val())) {
            $("#tbTen").html("*Chu cai dau cua moi tu phai viet hoa");
            $("#tbTen").addClass("mauDo");
            return false;
        } else {
            $("#tbTen").html("*");
            return true;
        }
    };
    $("#txtTen").blur(kiemTraHT);

//------------------------------------------------------------kt ngay tham gia sau ngay hien tai 7 ngay
    var txtNgay = $("#txtNgay");
var tbNgay = $("#tbNgay");

function KiemtraNgayKH() {
if (txtNgay.val() == "") {
    tbNgay.html("* bat buoc nhap");
    return false;

}
var day = new Date(txtNgay.val());
var today = new Date();
today.setDate(today.getDate() + 7);
if (day < today) {
    tbNgay.html("Ngay tham gia phai sau ngay hien tai 7 ngay");
    return false;
}
tbNgay.html("*");
return true;

}
txtNgay.blur(KiemtraNgayKH);

$("#btnSave").click(function() {
var matour = $("#txtMa").val();
 var ten = $("#txtTen").val();
 var ngay = $("#txtNgay").val();
var email=$("txtemail").val();

var anh = $("#txtAnh").val().substring(12);

var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + ten + "</td><td>" + ngay + "</td><td>"+email+"</td><td>" + anh + "</td><tr>";


$("table tbody").append(them);
$("#myModal").modal("hide");
return true;
    });


});
