import React from 'react'

export default function ErrorPage() {
  return (
    <>



    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                          Ha ocurrido un error, La página a la que intentas acceder no fue encontrada!
                </div>
                <div class="error-actions">
                    <a href="http://localhost:3000" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                             Regresa al inicio </a>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}