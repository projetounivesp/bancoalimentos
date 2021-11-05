from flask.json import jsonify
import traceback

import pymysql

class Estoque:
    def __init__(self, identrada=None, quantidade=None):
        self.identrada = identrada
        self.quantdade = quantidade
                
        self.conn = pymysql.connect(host='localhost',
                             user='root',
                             password='',
                             database='bancoalimentos',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
        
    def cadastroEstoque(self):
        try:
            with self.conn.cursor() as cur:
                sql = "INSERT INTO `estoque` (`identrada`, `quantidade`)VALUES(%s, %s)"
                cur.execute(sql,(self.identrada, self.quantidade))
                self.conn.commit()
        except:
                print("Erro ao tentar cadastrar os dados")
                traceback.print_exc()
        finally:
                self.conn.close()
    
    def listarEstoque(self):
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM estoque")
                result = cur.fetchall()
                return jsonify(result)
        except:
            print("Erro ao tentar listar doacoes")
        finally:
            self.conn.close()
            