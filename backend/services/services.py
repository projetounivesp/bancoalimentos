from flask import json
from flask.json import jsonify
from flask import Flask, request
from domain.doador import Doador
from domain.doacao import Doacao

from domain.produto import Produto

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
        id = dados['idproduto']
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
        id = 0
        bloco = dados['bloco_apartamento']
        cad = Produto(id,bloco)
        cad.cadastroDoador()
        return "teste"
    app.run()