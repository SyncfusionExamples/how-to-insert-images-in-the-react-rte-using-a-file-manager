import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, Inject, FileManager,
  FileManagerSettingsModel  } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {

  public hostURL : string = 'https://ej2-aspcore-service.azurewebsites.net/';

  public fileBrowserSettings : FileManagerSettingsModel = {
    enable: true,
    path: '/Pictures',
    ajaxSettings: {
      url: this.hostURL + 'api/FileManager/FileOperations',
      getImageUrl: this.hostURL + 'api/FileManager/GetImage',
      uploadUrl: this.hostURL + 'api/FileManager/Upload',
      downloadUrl: this.hostURL + 'api/FileManager/Download' 
    }
  }

  public customToolbar : object = {
    items : [ 'FileManager', 'Image']
  };
  
  render() {
    return ( 
        <RichTextEditorComponent toolbarSettings={this.customToolbar}
        fileManagerSettings={this.fileBrowserSettings}>
        <Inject services = {[Toolbar, Link, Image, HtmlEditor, FileManager]}></Inject>
          <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a> of the content</p>
          <p><b>Key features:</b></p>
          <ul>
            <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
            <li><p>Capable of handling markdown editing.</p></li>
            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
            <li><p>Provides a fully customizable toolbar.</p></li>
            <li><p>Provides HTML view to edit the source directly for developers.</p></li>
            <li><p>Supports third-party library integration.</p></li>
            <li><p>Allows preview of modified content before saving it.</p></li>
            <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
          </ul> 
        </RichTextEditorComponent>
    );
  }
}
   
export default App;



 
 
