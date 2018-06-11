from flask import Flask, render_template, request, redirect, Response

app = Flask(__name__)

@app.route('/')
def output():
	# serve index template
	return render_template('index.html', countdown_date='Jul 2, 2018 09:00:00')

if __name__ == '__main__':
	# run!
	app.run()
