var dataVal = $('#TextArea').val();
    if(dataVal!="")
    {
    $.ajax({
                url: '/argos.html',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: dataVal,
                success: function (response) {
                    alert('Success');      
                },
                error: function (xhr) {
                    alert('Error: There was some error while posting. Please try again later.');
                }
            });
    }
