import PubSub from "pubsub-js";

class PubSubWrapper{
    constructor(topic){
        this.topic = topic
    }
    
    publish(object){
        PubSub.publish(this.topic,object)
    }

    subscribe(handler){
        return PubSub.subscribe(this.topic,function(topic, object){
            handler(object)
        })
    }
}

const Topics = {
    NEW_AUTHOR_LIST: new PubSubWrapper("nova-listagem-autores"),
    AUTHOR_FORM_ERRORS: new PubSubWrapper("erros-formulario-autor"),
    AUTHOR_FORM_ERRORS_CLEAN: new PubSubWrapper("limpar-erros-formulario-autor")
}

export default Topics;
