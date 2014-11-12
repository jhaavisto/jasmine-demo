describe('ReditClient', function () {
  var client, remoteResponse;
  
  beforeEach(function () {
    spyOn(Backbone, 'sync').and.callFake(function(method, model, resp) {
      resp.success(TestResponses.get); 
    }); 
    client = new ReditClient();
    client.fetch();
  });

  it("should fill Collection with 2 items", function() {
    expect(client.models.length).toEqual(2);
  });

  describe('should fill Model', function () {
    
    beforeEach(function () {
      this.firstModel = client.models[1];  
    });

    it("attributes", function() {
      expect(_.keys(this.firstModel.attributes)).toContain('subreddit', 'title', 'url');  
    });
 
    it("title", function() {
      expect(this.firstModel.get('title')).toBe('WoW: Warlords of Draenor ad in Times Square.');  
    });

    it("url", function() {
      expect(this.firstModel.get('url')).toBe('https://i.imgur.com/wsJC1CP.jpg');  
    });

    it("should list available topics", function() {
      expect(client.topics()).toContain('funny', 'gaming');  
    });

    it("should filter items by given topic", function() {
      expect(client.findBy('funny').length).toBe(1);  
    });
  });
});
