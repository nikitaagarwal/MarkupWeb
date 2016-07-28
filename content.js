//temp from zipso
// Get the specific canvas element from the HTML document
var canvas = document.getElementById('sketchpad');

    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
        var ctx = canvas.getContext('2d');

    // Draws a dot at a specific position on the supplied canvas name
    // Parameters are: A canvas context, the x position, the y position
    function drawDot(ctx,x,y) {
        // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
        r=0; g=0; b=0; a=255;

        // Select a fill style
        ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
        // Draw a filled circle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
