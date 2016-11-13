//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/';
let notes = $$('todo-list .small-12');
let textNewTask = 'Q11';

describe('TODO site', function () {

    it('should have correct title', function () {
        browser.get(URL);
        expect(browser.getTitle()).toBe('Angular2 Seed');
    });

    it('should create new note', function () {
        let inputNewTask = $('input.enter-todo');

        browser.get(URL);
        inputNewTask.sendKeys(textNewTask);
        inputNewTask.submit();

        expect(notes.getText()).toContain(textNewTask);
    });

    it('should delete new note', function () {
        let noteNew = element(by.xpath('//*[ancestor::*[@class="todo-container"' +
            ' and descendant::*[text()="' + textNewTask + '"]] and @type="checkbox"]'));

        noteNew.click();

        expect(notes.getText()).not.toContain('Q11');
    });

    it('should delete all notes', function () {
        let notesAll = element.all(by.css('.todo-container [type="checkbox"]'));

        notesAll.click();

        expect(notesAll.count()).toBe(0);
    });

});
