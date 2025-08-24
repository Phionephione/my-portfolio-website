from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Define the main route that serves the resume webpage
@app.route('/')
def resume():
    # This function looks for 'index.html' in the 'templates' folder and returns it.
    return render_template('index.html')

# This allows you to run the script directly
if __name__ == '__main__':
    app.run(debug=True)