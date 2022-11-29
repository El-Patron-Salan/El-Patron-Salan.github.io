<!DOCTYPE html>
<html>
    <head>
        <title>LOSOWANKO</title>
    </head>
    <body>
        <?php
        require "auth.php";
        if ( isset( $failed ) ) { ?>
        <div id="login-bad">Trollo lolo 2137 Filip lubi stopki Alicji</div>
        <?php } ?>

        <form id="login-form" method="post" target="_self">
            <h1>INSERT VALIDATION STRING ;)</h1>
            <input type="text" name="valString" required>
            <input type="submit" value="Let meeeee innnn">
        </form>
    </body>
</html>