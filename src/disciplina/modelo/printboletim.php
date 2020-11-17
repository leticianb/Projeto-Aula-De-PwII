<?php

require_once '../../../new/dompdf/autoload.inc.php';

use Dompdf\Dompdf;

$dompdf = new Dompdf();

$dompdf->loadHtml('
<h1>Ola Mundo</h1>
    <p>Meu PDF Meu PDF Meu PDF Meu PDF </p>
    <p>Meu PDF Meu PDF Meu PDF Meu PDF</p>
    <p>Meu PDF Meu PDF Meu PDF Meu PDF</p>
');

$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

$dompdf->stream("boletim.pdf", array(true));



