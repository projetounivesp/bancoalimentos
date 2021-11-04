from flask.json import jsonify
import traceback

import pymysql

class Doacao:
    def __init__(self, idproduto=None, iddoador=None, quantidade=None):
        self.idproduto = idproduto
        self.iddoador = iddoador
        self.quantidade = quantidade
        
        self.conn = pymysql.connect(host='localhost',
                             user='root',
                             password='',
                             database='bancoalimentos',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
        
    def cadastroDoacao(self):
        try:
            with self.conn.cursor() as cur:
                sql = "INSERT INTO `doacao` (`idproduto`, `iddoador`, `quantidade`)VALUES(%s, %s, %s)"
                cur.execute(sql,(self.idproduto, self.iddoador, self.quantidade))
                self.conn.commit()
        except:
                print("Erro ao tentar cadastrar os dados")
                traceback.print_exc()
        finally:
                self.conn.close()
    
    def listarDoacao(self):
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM doacao")
                result = cur.fetchall()
                return jsonify(result)
        except:
            print("Erro ao tentar listar doacoes")
        finally:
            self.conn.close()
            
        
