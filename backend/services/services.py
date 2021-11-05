from domain.estoque import Estoque
from domain.produto import Produto
from domain.entrada import Entrada
from flask import json
from flask.json import jsonify
from flask_cors import CORS
from flask import Flask, request
from domain.doador import Doador
from domain.doacao import Doacao
<< << << < HEAD

== == == =
>>>>>> > 3b223dd61896e5025ed812c7a49617aac2952557


def runApplication():
    app = Flask(__name__)
    CORS(app)
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

    app.config['DEBUG'] = True

    # Rotas para produtos---------------------------------------

    @app.route('/api/v1/produto/listar', methods=['GET'])
    def listarProdutos():
        result = Produto()
        return result.listarProdutos()

    @app.route('/api/v1/produto/cadastro', methods=['POST'])
    def cadastroProduto():
        dados = request.get_json()
        id = 0
        nome = dados['nomeproduto']
        cad = Produto(id, nome)
        cad.cadastroProduto()
        return "cadastrado com sucesso"

    # Rotas para doador ------------------------------------------

    @app.route('/api/v1/doador/listar', methods=['GET'])
    def listarDoador():
        result = Doador()
        return result.listarDoador()

    @app.route('/api/v1/doador/cadastro', methods=['POST'])
    def cadastroDoador():
        dados = request.get_json()
        produto = dados['idproduto']
        doador = dados['iddoador']
        qtde = dados['quantidade']
        datadoacao = dados['datadoacao']
        cad = Doacao(produto, doador, qtde, datadoacao)
        cad.cadastroDoacao()
        return "teste"

    # Rotas para doacao ------------------------------------------

    @app.route('/api/v1/doacao/listar', methods=['GET'])
    def listarDoacao():
        result = Doacao()
        return result.listarDoacao()

    @app.route('/api/v1/doacao/cadastro', methods=['POST'])
    def cadastroDoacao():
        dados = request.get_json()
        idproduto = dados['idproduto']
        iddoador = dados['iddoador']
        quantidade = dados['quantidade']

        cad = Doacao(idproduto, iddoador, quantidade)
        cad.cadastroDoacao()
        return "Cadastro realizados com sucesso"

    @app.route('/api/v1/doacao/totaldoadoinicio', methods=['GET'])
    def totalDoacaoInicio():
        result = Doacao()
        return result.totalDoacaoInicio()

    @app.route('/api/v1/doacao/totaldoado24', methods=['GET'])
    def totalDoacao24():
        result = Doacao()
        return result.totalDoacao24()

    cad = Doacao(idproduto, iddoador, quantidade)
    cad.cadastroDoacao()
    return "cadastrado com sucesso"

# Rotas para Entrada ------------------------------------------

    @app.route('/api/v1/entrada/listar', methods=['GET'])
    def listarEntrada():
        result = Entrada()
        return result.listarEntrada()

    @app.route('/api/v1/entrada/cadastro', methods=['POST'])
    def cadastroEntrada():
        dados = request.get_json()
        idproduto = dados['idproduto']git
        datavalidade = dados['datavalidade']
        cad = Entrada(idproduto, datavalidade)
        cad.cadastroEntrada()
        return "cadastrado com sucesso"

    # Rotas para Estoque ------------------------------------------

    @app.route('/api/v1/estoque/listar', methods=['GET'])
    def listarEstoque():
        result = Estoque()
        return result.listarEstoque()

    @app.route('/api/v1/estoque/cadastro', methods=['POST'])
    def cadastroEstoque():
        dados = request.get_json()
        identrada = dados['identrada']
        quantidade = dados['quantidade']
        cad = Estoque(identrada, quantidade)
        cad.cadastroEstoque()
        return "cadastrado com sucesso"

    app.run()
