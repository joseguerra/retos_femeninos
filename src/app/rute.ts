export class Rutas{
  urlbase: string = "http://dimmexico.co/api/";
  urlimage: string = "http://dimmexico.co/pics_sponsors/";
  constructor(){}

  imageGet(){
    return this.urlimage;
  }

  organizadorasDetalleGet(){
    return this.urlbase+ "organizers/";
  }

  organizadorasGet(){
    return this.urlbase+ "organizers/";
  }

  sponsorsGet(){
    return this.urlbase+ "sponsors/";
  }

  salasGet(){
    return this.urlbase+ "places/";
  }

  newsGet(){
    return this.urlbase+ "news/";
  }

  oradoresGet(){
    return this.urlbase+ "orators/";
  }

  contenidosGet(){
    return this.urlbase+ "contents/";
  }

  oradoresDetalleGet(){
    return this.urlbase+ "orators/";
  }

  cityGet(){
    return this.urlbase+ "cities/";
  }

  placesGet(){
    return this.urlbase+ "places/";
  }

  roomsGet(id){
    if(id){
      return this.urlbase+ "rooms/?place_id={0}".replace("{0}", id);
    }
    return this.urlbase+ "rooms/";
  }

  register(){
    return this.urlbase+ "user/register";
  }

  login(){
    return this.urlbase+ "user/login";
  }

  facebookRegister(){
    return this.urlbase+ "user/facebookRegister";
  }

  trivias(token){
    if(token){
      return this.urlbase+ "trivias/?token={0}".replace("{0}", token) + "&d=" + new Date().getTime();
    }
    return this.urlbase+ "trivias" + "?d=" + new Date().getTime();;
  }

  questions(id){
    if(id){
      return this.urlbase+ "questions/?trivia_id={0}".replace("{0}", id);
    }
    return this.urlbase+ "questions";
  }

  store(){
    return this.urlbase+ "user_answers/store";
  }

  finished(){
    return this.urlbase+ "trivias/finished";
  }

  winners(place_id){
    if(place_id){
      return this.urlbase+ "winners/?place_id={0}".replace("{0}", place_id);
    }
    return this.urlbase+ "winners";
  }



}
