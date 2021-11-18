<template>
 <div>
 <!-- CONFIGURAÇÃO DO NAVBAR -->
   
    <b-navbar toggleable="lg" type="dark" variant="blue">
      <b-navbar-brand href="#"
        >Canversão Moedas por cotação diária</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Gravar"> Gravar Cálculo</b-nav-item>
          <b-nav-item to="/Listar">Listar Cálculo</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    
    <!-- FIM CONFIGURAÇÃO DO NAVBAR -->
  </div> 
</template>

<script>
export default {
  name: "NaveBarComponent",
};
</script>

