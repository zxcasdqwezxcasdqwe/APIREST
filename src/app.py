from flask import Flask,jsonify, redirect, render_template, request, url_for
from flask_mysqldb import MySQL
from config import config
app=Flask(__name__)


conexion=MySQL(app)

@app.route('/libros',methods=['GET'])
def listar_libros():
    try:
        cursor=conexion.connection.cursor()
        sql="SELECT * FROM libros"
        cursor.execute(sql)
        datos=cursor.fetchall()
        libros=[]
        for fila in datos:
            libro={'id':fila[0],'titulo':fila[1],'imagen':fila[2],'categoria':fila[3],'precio':fila[4]}
            libros.append(libro)
        return jsonify(libros)
    except Exception as ex:
        return jsonify({'mensaje':'Error'})
    
@app.route('/librosDestacados',methods=['GET'])
def libros_destacados():
    try:
        cursor=conexion.connection.cursor()
        sql="SELECT * FROM libros LIMIT 8"
        cursor.execute(sql)
        datos=cursor.fetchall()
        libros=[]
        for fila in datos:
            libro={'id':fila[0],'titulo':fila[1],'imagen':fila[2],'categoria':fila[3],'precio':fila[4]}
            libros.append(libro)
        return jsonify(libros)
    except Exception as ex:
        return jsonify({'mensaje':'Error'})
    
@app.route('/librosNuevos',methods=['GET'])
def libros_nuevos():
    try:
        cursor=conexion.connection.cursor()
        sql="SELECT * FROM libros LIMIT 8"
        cursor.execute(sql)
        datos=cursor.fetchall()
        libros=[]
        for fila in datos:
            libro={'id':fila[0],'titulo':fila[1],'imagen':fila[2],'categoria':fila[3],'precio':fila[4]}
            libros.append(libro)
        return jsonify(libros)
    except Exception as ex:
        return jsonify({'mensaje':'Error'})   

@app.route('/detail/<string:codigo>')
def ver_libro(codigo):
    try:
        cursor=conexion.connection.cursor()
        sql="SELECT id,titulo,imagen,categoria,precio FROM libros WHERE id= '{0}'".format(codigo)
        cursor.execute(sql)
        datos=cursor.fetchone()
        sql="SELECT id,titulo,imagen,categoria,precio FROM libros WHERE id!= '{0}' LIMIT 6".format(codigo)
        cursor.execute(sql)
        datos2=cursor.fetchall()
        insertObject=[]
        columnName=[column[0] for column in cursor.description]
        for record in datos2:
            insertObject.append(dict(zip(columnName,record)))    
                                
        if datos != None and datos2!=None:
            libro={'id':datos[0],'titulo':datos[1],'imagen':datos[2],'categoria':datos[3],'precio':datos[4]}
            return render_template('detail.html',data=libro,data2=insertObject)
        else:
            return jsonify({'mensaje':"Libro no encontrado"})
    except Exception as ex:
        return jsonify({'mensaje':"ERROR"})
    
@app.route('/buscarLibro',methods=['GET','POST'])
def buscarLibro():
    if request.method=='POST':
        search=request.form['buscar']
    try:
        cursor=conexion.connection.cursor()
        sql="SELECT id,titulo,imagen,categoria,precio FROM libros WHERE titulo LIKE '%{0}%'".format(search)
        cursor.execute(sql)
        datos=cursor.fetchone()                
        if datos != None:
            libro={'id':datos[0],'titulo':datos[1],'imagen':datos[2],'categoria':datos[3],'precio':datos[4]}
            return render_template('detail.html',data=libro)
        else:
            return jsonify({'mensaje':"Libro no encontrado"})
    except Exception as ex:
        return jsonify({'mensaje':"ERROR"})    
    
@app.route('/inicio')
def inicio():
    return redirect('/')

@app.route('/shop')
def shop():
    return render_template('shop.html')
@app.route("/")
def index():
    return render_template('index.html')



if __name__=='__main__':
    app.config.from_object(config['development'])
    app.run()