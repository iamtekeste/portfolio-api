'use strict';

module.exports = function(Project) {
	Project.slug = function(slug, cb) {
		Project.find({where:{slug:slug}}, function(err, project) {
			cb(null, project);
		})
	}

	Project.remoteMethod(
        'slug', 
        {
          accepts: {arg: 'slug', type: 'string', required:true},
          http: {path: '/slug/:slug', verb:'get'},
          returns: {root: true, type: 'Object'}
        }
    ); 
};
