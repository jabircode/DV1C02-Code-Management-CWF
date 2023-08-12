const fs = require('fs');
const assert = require('assert');
const { JSDOM } = require('jsdom');

// Create a virtual DOM for testing
const createDOM = (html) => new JSDOM(html);

// Read HTML content from files
const indexHtml = fs.readFileSync('index.html', 'utf-8');
const contactHtml = fs.readFileSync('contact.html', 'utf-8');
const achievementsHtml = fs.readFileSync('achievements.html', 'utf-8');

const indexDOM = createDOM(indexHtml);
const contactDOM = createDOM(contactHtml);
const achievementsDOM = createDOM(achievementsHtml);

// Test suite for navigation links
describe('Website Navigation', function () {
  describe('Home Page', function () {
    it('should have a link to Home in the navigation', function () {
      const homeLink = indexDOM.window.document.querySelector('nav ul li a[href="index.html"]');
      assert.strictEqual(homeLink.textContent, 'Home');
    });

    it('should have a link to Contact in the navigation', function () {
      const contactLink = indexDOM.window.document.querySelector('nav ul li a[href="contact.html"]');
      assert.strictEqual(contactLink.textContent, 'Contact');
    });

    it('should have a link to Achievements in the navigation', function () {
      const achievementsLink = indexDOM.window.document.querySelector('nav ul li a[href="achievements.html"]');
      assert.strictEqual(achievementsLink.textContent, 'Achievements');
    });
  });

  describe('Contact Page', function () {
    it('should have a link to Home in the navigation', function () {
      const homeLink = contactDOM.window.document.querySelector('nav ul li a[href="index.html"]');
      assert.strictEqual(homeLink.textContent, 'Home');
    });

    it('should have a link to Contact in the navigation', function () {
      const contactLink = contactDOM.window.document.querySelector('nav ul li a[href="contact.html"]');
      assert.strictEqual(contactLink.textContent, 'Contact');
    });

    it('should have a link to Achievements in the navigation', function () {
      const achievementsLink = contactDOM.window.document.querySelector('nav ul li a[href="achievements.html"]');
      assert.strictEqual(achievementsLink.textContent, 'Achievements');
    });
  });

  describe('Achievements Page', function () {
    it('should have a link to Home in the navigation', function () {
      const homeLink = achievementsDOM.window.document.querySelector('nav ul li a[href="index.html"]');
      assert.strictEqual(homeLink.textContent, 'Home');
    });

    it('should have a link to Contact in the navigation', function () {
      const contactLink = achievementsDOM.window.document.querySelector('nav ul li a[href="contact.html"]');
      assert.strictEqual(contactLink.textContent, 'Contact');
    });

    it('should have a link to Achievements in the navigation', function () {
      const achievementsLink = achievementsDOM.window.document.querySelector('nav ul li a[href="achievements.html"]');
      assert.strictEqual(achievementsLink.textContent, 'Achievements');
    });
  });
});
