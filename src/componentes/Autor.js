import React, {Component} from "react";
import Jquery from "jquery";
import InputCustomizado from "./InputCustomizado";
import BotaoSubmitCustomizado from "./BotaoSubmitCustomizado";
import Topics from "../utils/Topics"
import TrataErros from "../utils/TrataErros";
import "../css/grids-responsive-min.css"

export default class AutorBox extends Component{
    render(){
        return(
            <div className="pure-g">
                <div className="pure-u-1 pure-u-sm-1-2">
                    <FormularioAutor />
                </div>
                <div className="pure-u-1 pure-u-sm-1-2">
                    <TabelaAutores />                    
                </div>
            </div>
        )
    }
}

class FormularioAutor extends Component{

    constructor(){
        super()
        this.state = {nome:"",email:"",senha:""}
        this.enviaForm = this.enviaForm.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setSenha = this.setSenha.bind(this)
    }

    enviaForm(evento){
        evento.preventDefault();
        Jquery.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: "json",
            contentType:"application/json",
            type:"post",
            data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
            success:function(novaLista){
                Topics.NEW_AUTHOR_LIST.publish(novaLista)
                this.setState({nome:"",email:"",senha:""})
            }.bind(this),
            error: function(resposta){
                new TrataErros().publicaErros(resposta.responseJSON)
            },
            beforeSend: function(){
                Topics.AUTHOR_FORM_ERRORS_CLEAN.publish({})
            }
        })
    }
    
    setNome(evento){
        this.setState({nome:evento.target.value})
    }
    
    setEmail(evento){
        this.setState({email:evento.target.value})
    }
    
    setSenha(evento){
        this.setState({senha:evento.target.value})
    }

    render(){
        return(
            <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                <fieldset>
                    <legend>Inserir um novo autor</legend>
                    <InputCustomizado id="name" name="nome" type="text" placeholder="Nome do autor" label="Nome" value={this.state.nome} onChange={this.setNome}/>
                    <InputCustomizado id="email" name="email" type="email" placeholder="Email do autor" label="Email" value={this.state.email} onChange={this.setEmail}/>
                    <InputCustomizado id="password" name="senha" type="password" placeholder="Senha do autor" label="Senha" value={this.state.senha} onChange={this.setSenha}/>
                    <BotaoSubmitCustomizado label="Gravar"/>
                </fieldset>
            </form>
        )
    }
}

class TabelaAutores extends Component{
    constructor(){
        super()
        this.state = {table:[]}
    }

    componentDidMount(){
        Jquery.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: "json",
            success:function(lista){
                this.setState({table:lista});
            }.bind(this)
        })
        Topics.NEW_AUTHOR_LIST.subscribe(function(novaLista){
            this.setState({table:novaLista})
        }.bind(this))
    }

    render(){
        return (
            <form className="pure-form">
                <fieldset>
                    <legend>Autores</legend>
                    <table className="max-width pure-table pure-table-horizontal pure-table-striped">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.table.map(function(autor){
                            return (
                            <tr key={autor.id}>
                                <td>{autor.nome}</td>
                                <td>{autor.email}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table> 
                </fieldset>
            </form>
        )
    }
}