$("#reset").click(function () {
    $("#message").html("Player 1 (X)")
    $("#message").data("status","X")
    $("#message").data("available",9)
    $(".tic").text("")
    $("#gameBoard").css("pointer-events", "all")
    reset_board()


});

function reset_board(){
    $("#1").data("mark","")
    
    $("#2").data("mark","")
    
    $("#3").data("mark","")
    
    $("#4").data("mark","")
    
    $("#5").data("mark","")
    
    $("#6").data("mark","")
   
    $("#7").data("mark","")
   
    $("#8").data("mark","")
    
    $("#9").data("mark","")
}


function get_board(){
    var b1 = $("#1").data("mark")
    if (b1 == undefined){
        b1 =''
    }
    var b2 = $("#2").data("mark")
    if (b2 == undefined){
        b2 =''
    }
    var b3 = $("#3").data("mark")
    if (b3 == undefined){
        b3 =''
    }
    var b4 = $("#4").data("mark")
    if (b4 == undefined){
        b4 =''
    }
    var b5 = $("#5").data("mark")
    if (b5 == undefined){
        b5 =''
    }
    var b6 = $("#6").data("mark")
    if (b6 == undefined){
        b6 =''
    }
    var b7 = $("#7").data("mark")
    if (b7 == undefined){
        b7 =''
    }
    var b8 = $("#8").data("mark")
    if (b8 == undefined){
        b8 =''
    }
    var b9 = $("#9").data("mark")
    if (b9 == undefined){
        b9 =''
    }
    board_data = [[b1, b2, b3], [b4, b5, b6], [b7, b8, b9]]
    return board_data
}

function available_square(no_of_square_remain){
    var total = []
    var i
    for (i=1; i<=no_of_square_remain; i++){
        total.push(i)
    }
    return total
}

$("#1").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#2").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#3").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#4").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#5").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#6").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#7").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#8").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


$("#9").click(function (){
    var status = $("#message").data("status")
    var marked = $(this).data("mark", status)
    var available_data = $("#message").data("available")
    remaining = available_data - 1
    console.log(remaining)
    remaining_square = available_square(remaining)
    console.log(remaining_square)
    board_data = get_board()
    console.log(status)
    console.log(board_data)
    // $("#1").html(status);
    $(this).html(status);
    var req;
    req = $.ajax({
        url: '/api/check',
        type: 'POST',
        data:{
            // board: [["X", "O", "X"],["X", "O", "X"],["X", "", ""]],
            // available: [1,2]
            board: board_data,
            available: remaining_square
        }
    });
    req.done(function(response){
        if(response.status){
            msg = response.message;
            if (msg == null){
                console.log("null value")
                if (status == "X") {
                    status = "O"
                    $("#message").html("Player 2 (O)")
                } else {
                    status = "X"
                    $("#message").html("Player 1 (X)")
                }  
                $("#message").data("status", status)  
                $("#message").data("available", remaining)
            } else if (msg == "draw") {
                console.log("draw value")
                $("#message").html("")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "X") {
                console.log("X value")
                $("#message").html("Player 1 (X) wins")
                $("#gameBoard").css("pointer-events", "none")
            } else if (msg == "O") {
                console.log("O value")
                $("#message").html("Player 2 (O) wins")
                $("#gameBoard").css("pointer-events", "none")
            }
        }else{
            alert(response.message);
        }
    });

    req.fail(function(){
        alert('An error occured, please try again');
    });
})


