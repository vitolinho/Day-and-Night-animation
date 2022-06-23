$(function() {
    $('#sun_yellow').animate({'top':'96%','opacity':0.4}, 10000,function(){
        $('#stars').animate({'opacity':1}, 5000,function(){
             $('#moon').animate({'top':'30%','opacity':1}, 5000, function(){
                 $('#sstar').animate({'opacity':1}, 300);
                 $('#sstar').animate({
                     'backgroundPosition':'0px 0px','top':'15%', 'opacity':0
                 }, 500);
             });
        });
    });
    $('#sun_red').animate({'top':'96%','opacity':0.8}, 10000);
    $('#sky').animate({'backgroundColor':'#4F0030'}, 15000);
    $('#clouds').animate({'backgroundPosition':'1000px 0px','opacity':0}, 20000);
    $('#night').animate({'opacity':0.8}, 20000);
 });