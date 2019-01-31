window.addEventListener("load", function () {
    var canvas = document.getElementById('canvas');
    var clk = canvas.getContext('2d');
    var clockRadius = 250;

    setInterval(drawClock, 1000);



    function drawClock() {

        clk.clearRect(0, 0, clk.canvas.width, clk.canvas.height);

        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        hours = hours > 12 ? hours - 12 : hours;
        var hour = hours + minutes / 60;
        var minute = minutes + seconds / 60;

        clk.save();

        clk.translate(canvas.width / 2, canvas.height / 2);
        clk.beginPath();

        clk.save();
        var theta = (hour - 3) * 2 * Math.PI / 12;
        clk.rotate(theta);
        clk.beginPath();
        clk.moveTo(-5, -5);
        clk.lineTo(-5, 5);
        clk.lineTo(clockRadius * 0.4, 1);
        clk.lineTo(clockRadius * 0.4, -1);
        clk.fill();
        clk.restore();

        clk.save();
        var theta = (minute - 15) * 2 * Math.PI / 60;
        clk.rotate(theta);
        clk.beginPath();
        clk.moveTo(-5, -4);
        clk.lineTo(-5, 4);
        clk.lineTo(clockRadius * 0.5, 1);
        clk.lineTo(clockRadius * 0.5, -1);
        clk.fill();
        clk.restore();

        clk.save();
        var theta = (seconds - 15) * 2 * Math.PI / 60;
        clk.rotate(theta);
        clk.beginPath();
        clk.moveTo(-5, -3);
        clk.lineTo(-5, 3);
        clk.lineTo(clockRadius * 0.6, 1);
        clk.lineTo(clockRadius * 0.6, -1);
        clk.fillStyle = 'red';
        clk.fill();
        clk.restore();

        clk.beginPath();
        clk.arc(0, 0, 10, 0, 2*Math.PI, false);
        clk.fillStyle = 'black';
        clk.fill();
        clk.lineWidth = 1;
        clk.strokeStyle = 'black';
        clk.stroke();

        clk.restore();
    }
});