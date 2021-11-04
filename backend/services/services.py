from flask import json
from flask.json import jsonify
from flask import Flask, request
from domain.doador import Doador
from domain.doacao import Doacao
from domain.entrada import Entrada
from domain.produto import Produto
from domain.estoque import Estoque

def runApplication():
    app = Flask(__name__)
    app.config['DEBUG']=True

    # Rotas para produtos---------------------------------------

    @app.route('/api/v1/produto/listar',methods=['GET'])
    def listarprodutos():
        result = Produto()
        return result.listarProdutos()

    @app.route('/api/v1/produto/cadastro',methods=['POST'])
    def cadastroproduto():
        dados = request.get_json()
        id = 0
        nome = dados['nomeproduto']
        cad = Produto(id,nome)
        cad.cadastroProduto()
        return "cadastrado com sucesso"
    
    # Rotas para doador ------------------------------------------

    @app.route('/api/v1/doador/listar',methods=['GET'])
    def listardoador():
        result = Doador()
        return result.listarDoador()

    @app.route('/api/v1/doador/cadastro',methods=['POST'])
    def cadastrodoador():
        dados = request.get_json()
        produto = dados['idproduto']
        doador = dados['iddoador']
        qtde = dados['quantidade']
        datadoacao = dados['datadoacao']
        cad = Doacao(produto,doador,qtde,datadoacao)
        cad.cadastroDoacao()
        return "teste"

    # Rotas para doacao ------------------------------------------


    @app.route('/api/v1/doacao/listar',methods=['GET'])
    def listarDoacao():
        result = Doacao()
        return result.listarDoacao()

    @app.route('/api/v1/doacao/cadastro',methods=['POST'])
    def cadastroDoacao():
        dados = request.get_json()
        idproduto = dados['idproduto']
        iddoador = dados['iddoador']
        quantidade = dados['quantidade']
        cad = Doacao(idproduto, iddoador, quantidade)
        cad.cadastroDoacao()
        return "cadastrado com sucesso"

# Rotas para Entrada ------------------------------------------


    @app.route('/api/v1/entrada/listar',methods=['GET'])
    def listarEntrada():
        result = Entrada()
        return result.listarEntrada()

    @app.route('/api/v1/entrada/cadastro',methods=['POST'])
    def cadastroEntrada():
        dados = request.get_json()
        idproduto = dados['idproduto']
        datavalidade = dados['datavalidade']
        cad = Entrada(idproduto, datavalidade)
        cad.cadastroEntrada()
        return "cadastrado com sucesso"

    # Rotas para Estoque ------------------------------------------


    @app.route('/api/v1/estoque/listar',methods=['GET'])
    def listarEstoque():
        result = Estoque()
        return result.listarEstoque()

    @app.route('/api/v1/estoque/cadastro',methods=['POST'])
    def cadastroEstoque():
        dados = request.get_json()
        identrada = dados['identrada']
        quantidade = dados['quantidade']
        cad = Estoque(identrada, quantidade)
        cad.cadastroEstoque()
        return "cadastrado com sucesso"
    
    app.run()