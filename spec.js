//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/';
let notes = $$('todo-list .small-12');
let textNewTask = 'Q11';

function createNewNote() {
    let inputNewTask = $('input.enter-todo');

    browser.get(URL);
    inputNewTask.sendKeys(textNewTask);
    inputNewTask.submit();

    expect(notes.getText()).toContain(textNewTask);
}

describe('TODO site', function () {

    it('should have correct title', function () {
        browser.get(URL);
        expect(browser.getTitle()).toBe('Angular2 Seed');
    });

    it('should create new note', function () {
        createNewNote();
    });

    it('should delete new note', function () {
        let noteNew = element(by.xpath('//*[ancestor::*[@class="todo-container"' +
            ' and descendant::*[text()="' + textNewTask + '"]] and @type="checkbox"]'));

        createNewNote();
        noteNew.click();

        expect(notes.getText()).not.toContain('Q11');
    });

    it('should delete all notes', function () {
        let notesAll = element.all(by.css('.todo-container [type="checkbox"]'));

        browser.get(URL);
        notesAll.click();

        expect(notesAll.count()).toBe(0);
    });

});
